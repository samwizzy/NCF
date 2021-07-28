import styled from "styled-components"

const NavBar = styled.div`
	li > ul { transform: translatex(100%) scale(0) }
	li:hover > ul { transform: translatex(101%) scale(1) }
	li > button svg { transform: rotate(-90deg) }
	li:hover > button svg { transform: rotate(-270deg) }

	.group:hover .group-hover\:scale-100 { transform: scale(1) }
	.group:hover .group-hover\:-rotate-180 { transform: rotate(180deg) }
	.scale-0 { transform: scale(0) }
	.min-w-32 { min-width: 8rem }
`

export default NavBar