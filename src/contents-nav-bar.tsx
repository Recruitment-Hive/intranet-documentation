import { HashLink } from 'react-router-hash-link';
type contentsNavBarProps = {
    links: contentsNavBarLink[];
    activeHash: string;
}
export type contentsNavBarLink = {
    title: string;
    target: string;
    children: contentsNavBarLink[];
}

function unfurlLinks(links: contentsNavBarLink[], activeHash: string, depth = 0) {
    return (
        <div id={depth === 0 ? 'contents-nav-bar-link' : undefined}>
            {links.map((link, i) => (
                <div key={`${link.target}-${i}`}>
                    {/* Render the parent link */}
                    <HashLink smooth to={link.target} className={`nav-link ${activeHash === link.target ? ' active' : ''}`}>
                        <div className={'nav-link-container ' + (depth == 1 ? 'indent' : '')}>

                            {link.title}

                        </div>
                    </HashLink>
                    {/* If children exist, recursively call the function */}
                    {link.children && link.children.length > 0 && (
                        unfurlLinks(link.children, activeHash, depth + 1)
                    )}
                </div>
            ))}
        </div>
    )
}
export function ContentsNavBar({ links, activeHash }: contentsNavBarProps) {
    return (
        <div id='contents-nav-bar'>
            <div id='contents-nav-bar-header'>CONTENTS</div>
            {unfurlLinks(links, activeHash)}
        </div>
    )
}