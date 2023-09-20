import classNames from 'classnames';
import styles from './front-page.module.scss';

export interface FrontPageProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const FrontPage = ({ className }: FrontPageProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <nav>
                <img
                    src="https://d1.awsstatic.com/apac/customer-references-logos-(%401x---%402x)/eHealthNSW_Logo%402x.7bf59f1d50bacc6c378cb4f49be66ac88bc1201a.png"
                    alt=""
                />
            </nav>
            <div />
        </div>
    );
};
