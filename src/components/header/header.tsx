import classNames from 'classnames';
import styles from './header.module.scss';

export interface HeaderProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Header = ({ className }: HeaderProps) => {
    return (
        <nav>
            <div className={styles.header}>
                <img
                    src="https://d1.awsstatic.com/apac/customer-references-logos-(%401x---%402x)/eHealthNSW_Logo%402x.7bf59f1d50bacc6c378cb4f49be66ac88bc1201a.png"
                    alt=""
                    style={{
                        paddingRight: '10px',
                        paddingLeft: '10px',
                    }}
                />
                <div>
                    <img
                        src="https://w7.pngwing.com/pngs/608/913/png-transparent-computer-icons-google-search-symbol-mobile-search-search-for-miscellaneous-logo-mobile-phones-thumbnail.png"
                        alt=""
                        style={{
                            height: 35,
                            width: 35,
                            paddingRight: '10px',
                            paddingLeft: '10px',
                        }}
                    />
                    <img
                        src="https://w7.pngwing.com/pngs/467/838/png-transparent-logo-message-text-messaging-sms-web-design-angle-web-design-text-thumbnail.png"
                        alt=""
                        style={{
                            height: 35,
                            width: 35,
                            paddingRight: '10px',
                            paddingLeft: '10px',
                        }}
                    />
                    <img
                        src="https://w7.pngwing.com/pngs/832/828/png-transparent-alarm-alert-attention-bell-notification-notifications-ring-random-icon-thumbnail.png"
                        alt=""
                        style={{
                            height: 35,
                            width: 35,
                            paddingRight: '10px',
                            paddingLeft: '1px',
                        }}
                    />
                    <img
                        src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
                        alt=""
                        style={{
                            height: 35,
                            width: 35,
                            paddingRight: '10px',
                            paddingLeft: '10px',
                        }}
                    />
                    Hello, George
                </div>
            </div>
        </nav>
    );
};
