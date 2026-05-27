import { HashLink } from 'react-router-hash-link';
type contentsNavBarProps = {
    links: contentsNavBarLink[];
    activeHash: string;
    onLinkClick: (target: string) => void;
}
export type contentsNavBarLink = {
    title: string;
    target: string;
    children: contentsNavBarLink[];
}
function unfurlLinks(links: contentsNavBarLink[], depth = 0, activeHash = '', onLinkClick: (target: string) => void = () => {}) {
    return (
        <div id={depth === 0 ? 'contents-nav-bar-link' : undefined}>
            {links.map((link, i) => (
                <div key={`${link.target}-${i}`}>
                    <HashLink smooth to={link.target} className={`nav-link${activeHash === link.target ? ' active' : ''}`} onClick={() => onLinkClick(link.target)}>
                        <div className={'nav-link-container ' + (depth == 1 ? 'indent' : depth == 2 ? 'indent-2' : '')}>
                            {link.title}
                        </div>
                    </HashLink>
                    {link.children && link.children.length > 0 && (
                        unfurlLinks(link.children, depth + 1, activeHash, onLinkClick)
                    )}
                </div>
            ))}
        </div>
    )
}
export function ContentsNavBar({ links, activeHash, onLinkClick }: contentsNavBarProps) {
    return (
        <div id='contents-nav-bar'>
            <div id='contents-nav-bar-header'>CONTENTS</div>
            {unfurlLinks(links, 0, activeHash, onLinkClick)}
        </div>
    )
}