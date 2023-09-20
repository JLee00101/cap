import classNames from 'classnames';
import styles from './upcoming-project.module.scss';

export interface UpcomingProjectProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const UpcomingProject = ({ className }: UpcomingProjectProps) => {
    return (
        <div>
            <div className={styles.contentHeader}>Upcoming Projects:</div>
            <div className={styles.projectCarousel}>
                <div className={styles.projectCard}>
                    Project 1
                    <img
                        src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                        alt=""
                        style={{
                            paddingRight: '10px',
                            paddingLeft: '10px',
                            height: 150,
                            width: 150,
                        }}
                    />
                </div>
                <div className={styles.projectCard}>
                    Project 2
                    <img
                        src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                        alt=""
                        style={{
                            paddingRight: '10px',
                            paddingLeft: '10px',
                            height: 150,
                            width: 150,
                        }}
                    />
                </div>
                <div className={styles.projectCard}>
                    Project 3
                    <img
                        src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                        alt=""
                        style={{
                            paddingRight: '10px',
                            paddingLeft: '10px',
                            height: 150,
                            width: 150,
                        }}
                    />
                </div>
            </div>
        </div>
    );
};
