import classNames from 'classnames';
import styles from './project-page.module.scss';
import { Sidebar } from '../sidebar/sidebar';
import { NewProject } from '../new-project/new-project';

export interface ProjectPageProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const ProjectPage = ({ className }: ProjectPageProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className="splitPanel">
                <NewProject />
                <Sidebar />
            </div>
        </div>
    );
};
