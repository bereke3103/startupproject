import React from "react";
import {Layout} from "antd";
import {Link} from "react-router-dom";

const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 50,
    lineHeight: '64px',
    backgroundColor: '#7dbcea',
};

interface ArrayLinkProps {
    className: string,
    to: string,
    linkName: string,
}

interface LinkProps {
    links: ArrayLinkProps[]
}

const HeaderLink: React.FC<LinkProps> = ({links}: LinkProps) => {
    return (
        <Layout.Header style={headerStyle}>
            <div className={"links"}>
                {links.map((link) => (
                    <Link to={link.to} className={link.className}>{link.linkName}</Link>
                ))}
            </div>
        </Layout.Header>
    );
}

export default HeaderLink;