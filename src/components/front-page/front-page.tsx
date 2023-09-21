import classNames from 'classnames';
import styles from './front-page.module.scss';
import { OngoingProject } from '../ongoing-project/ongoing-project';
import { UpcomingProject } from '../upcoming-project/upcoming-project';
import { Sidebar } from '../sidebar/sidebar';

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
            <div className="splitPanel">
                <div>
                    <UpcomingProject />
                    <OngoingProject />
                </div>
                <Sidebar />
            </div>
        </div>
    );
};
