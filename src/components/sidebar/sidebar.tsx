import classNames from 'classnames';
import styles from './sidebar.module.scss';

export interface SidebarProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Sidebar = ({ className }: SidebarProps) => {
    return (
        <div className={styles.sidebar}>
            <h1 className={styles.contentHeader}>Upcoming Trials</h1>
            <ul>Project 5</ul>
            <ul>Project 6</ul>
            <ul>Project 7</ul>
            <h1 className={styles.contentHeader}>Calendar</h1>
            <img
                src="https://www.typecalendar.com/wp-content/uploads/2022/09/September-2023-Calendar.jpg"
                style={{
                    width: 180,
                    height: 160,
                }}
            />
            <h1 className={styles.contentHeader}>Feedback</h1>
            <p> Tell us what you think</p>
        </div>
    );
};
