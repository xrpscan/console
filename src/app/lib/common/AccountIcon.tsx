import Image from "next/image";

export interface IAccountIcon {
    twitter: string,
    height?: number,
    width?: number,
    ttl?: string,
}

const AccountIcon = (props: IAccountIcon) => {
    const { 
        twitter,
        height,
        width,
        ttl,
    } = props;
    const _height = height || 24;
    const _width = width || 24;
    const _ttl = ttl || "28d";
    
    const getIconURL = () => {
        if (typeof twitter === 'string') {
            return `https://unavatar.io/x/${twitter}?ttl=${_ttl}&fallback=https://console.xrpscan.com/xrpl-symbol-black.svg`;
        } else {
            return `/xrpl-symbol-black.svg`;
        }
    };

    const iconStyle = {
        borderRadius: '50%',
        border: '1px solid #fff',
    }

    const iconTag = <span>
        <Image
            src={getIconURL()}
            height={_height}
            width={_width}
            alt="Avatar"
            placeholder="empty"
            style={iconStyle}
        />
    </span>
    return iconTag;
}

export default AccountIcon;