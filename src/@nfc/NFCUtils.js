import _ from '@lodash';

class NFCUtils {

    static filterArrayByString(mainArr, searchText)
    {
        if ( searchText === '' )
        {
            return mainArr;
        }

        searchText = searchText.toLowerCase();

        return mainArr.filter(itemObj => {
            return this.searchInObj(itemObj, searchText);
        });
    };

    static searchInObj(itemObj, searchText)
    {
        for ( const prop in itemObj )
        {
            if ( !itemObj.hasOwnProperty(prop) )
            {
                continue;
            }

            const value = itemObj[prop];

            if ( typeof value === 'string' )
            {
                if ( this.searchInString(value, searchText) )
                {
                    return true;
                }
            }

            else if ( Array.isArray(value) )
            {
                if ( this.searchInArray(value, searchText) )
                {
                    return true;
                }
            }

            if ( typeof value === 'object' )
            {
                if ( this.searchInObj(value, searchText) )
                {
                    return true;
                }
            }
        }
    }

    static searchInArray(arr, searchText)
    {
        for ( const value of arr )
        {
            if ( typeof value === 'string' )
            {
                if ( this.searchInString(value, searchText) )
                {
                    return true;
                }
            }

            if ( typeof value === 'object' )
            {
                if ( this.searchInObj(value, searchText) )
                {
                    return true;
                }
            }
        }
    }

    static searchInString(value, searchText)
    {
        return value.toLowerCase().includes(searchText);
    }

    static generateGUID()
    {
        function S4()
        {
            return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }

        return S4() + S4();
    }

    static toggleInArray(item, array)
    {
        if ( array.indexOf(item) === -1 )
        {
            array.push(item);
        }
        else
        {
            array.splice(array.indexOf(item), 1);
        }
    }

    static handleize(text)
    {
        return text.toString().toLowerCase()
            .replace(/\s+/g, '-')           // Replace spaces with -
            .replace(/\W+/g, '')       // Remove all non-word chars
            .replace(/--+/g, '-')         // Replace multiple - with single -
            .replace(/^-+/, '')             // Trim - from start of text
            .replace(/-+$/, '');            // Trim - from end of text
    }

    static setRoutes(config)
    {
        let routes = [...config.routes];

        if ( config.settings || config.auth )
        {
            routes = routes.map((route) => {
                let auth = config.auth ? [...config.auth] : null;
                auth = route.auth ? [...auth, ...route.auth] : auth;
                return {
                    ...route,
                    settings: {...config.settings, ...route.settings},
                    auth
                };
            });
        }

        return [...routes];
    }

    static generateRoutesFromConfigs(configs)
    {
        let allRoutes = [];
        configs.forEach((config) => {
            allRoutes = [
                ...allRoutes,
                ...this.setRoutes(config)
            ]
        });
        return allRoutes;
    }

    static difference(object, base)
    {
        function changes(object, base)
        {
            return _.transform(object, function (result, value, key) {
                if ( !_.isEqual(value, base[key]) )
                {
                    result[key] = (_.isObject(value) && _.isObject(base[key])) ? changes(value, base[key]) : value;
                }
            });
        }

        return changes(object, base);
    }

    static updateNavItem(nav, id, item)
    {
        return nav.map(_item => {

            if ( _item.id === id )
            {
                return _.merge({}, _item, item);
            }

            if ( _item.children )
            {
                return _.merge({}, _item, {
                    children: this.updateNavItem(_item.children, id, item)
                });
            }
            else
            {
                return _.merge({}, _item);
            }
        })
    }

    static removeNavItem(nav, id)
    {
        return nav.map(_item => {
            if ( _item.id === id )
            {
                return null;
            }

            if ( _item.children )
            {
                return _.merge({}, _.omit(_item, ['children']), {
                    children: this.removeNavItem(_item.children, id)
                });
            }
            else
            {
                return _.merge({}, _item);
            }
        }).filter(s => s)
    }

    static prependNavItem(nav, item, parentId)
    {
        if ( !parentId )
        {
            return [
                item,
                ...nav
            ]
        }

        return nav.map(_item => {

            if ( _item.id === parentId && _item.children )
            {
                return {
                    _item,
                    children: [
                        item,
                        ..._item.children
                    ]
                };
            }

            if ( _item.children )
            {
                return _.merge({}, _item, {
                    children: this.prependNavItem(_item.children, item, parentId)
                });
            }
            else
            {
                return _.merge({}, _item);
            }
        })
    }

    static appendNavItem(nav, item, parentId)
    {
        if ( !parentId )
        {
            return [
                ...nav,
                item
            ]
        }

        return nav.map(_item => {

            if ( _item.id === parentId && _item.children )
            {
                return {
                    _item,
                    children: [
                        ..._item.children,
                        item
                    ]
                };
            }

            if ( _item.children )
            {
                return _.merge({}, _item, {
                    children: this.appendNavItem(_item.children, item, parentId)
                });
            }
            else
            {
                return _.merge({}, _item);
            }
        })
    }

    static hasPermission(authArr, userRole)
    {
        /**
         * If auth array is not defined
         * Pass and allow
         */
        if ( authArr === null || authArr === undefined )
        {
            // console.info("auth is null || undefined:", authArr);
            return true;
        }
        /**
         * if auth array is empty means,
         * allow only user role is guest (null or empty[])
         */
        else if ( authArr.length === 0 )
        {
            // console.info("auth is empty[]:", authArr);
            return !userRole || userRole.length === 0;
        }
        /**
         * Check if user has grants
         */
        else
        {
            // console.info("auth arr:", authArr);
            /*
            Check if user role is array,
            */
            if ( userRole && Array.isArray(userRole) )
            {
                return authArr.some(r => userRole.indexOf(r) >= 0);
            }

            /*
            Check if user role is string,
            */
            return authArr.includes(userRole);
        }
    }

    static toBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result.split(',')[1]);
            reader.onerror = error => reject(error);
        });
    }

    static formatCurrency = (value, code = 'NGN', locale = 'en-NG') => {
        if (!code) code = 'NGN';
        return new Intl.NumberFormat(locale, { style: 'currency', currency: code }).format(Number(value))
    }

    static validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    
    static validatePhone = (phone) => {
        const re = /^\d+$/;
        return re.test(phone) && phone.length === 11;
    }

}

export default NFCUtils;
