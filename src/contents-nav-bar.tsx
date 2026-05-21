import { HashLink } from 'react-router-hash-link';
type contentsNavBarProps = {
    links: contentsNavBarLink[];
    //activeHash: string;
}
export type contentsNavBarLink = {
    title: string;
    target: string;
    children: contentsNavBarLink[];
}
//activeHash: string,
function unfurlLinks(links: contentsNavBarLink[], depth = 0) {
    //${activeHash === link.target ? ' active' : ''}
    return (
        <div id={depth === 0 ? 'contents-nav-bar-link' : undefined}>
            {links.map((link, i) => (
                <div key={`${link.target}-${i}`}>
                    {/* Render the parent link */}
                    <HashLink smooth to={link.target} className={`nav-link `}>
                        <div className={'nav-link-container ' + (depth == 1 ? 'indent' : '')}>

                            {link.title}

                        </div>
                    </HashLink>
                    {/* If children exist, recursively call the function */}
                    {link.children && link.children.length > 0 && (
                        unfurlLinks(link.children, depth + 1)
                    )}
                </div>
            ))}
        </div>
    )
}
export function ContentsNavBar({ links }: contentsNavBarProps) {
    return (
        <div id='contents-nav-bar'>
            <div id='contents-nav-bar-header'>CONTENTS</div>
            {unfurlLinks(links)}
        </div>
    )
}