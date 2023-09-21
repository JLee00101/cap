import classNames from 'classnames';
import styles from './new-project.module.scss';

export interface NewProjectProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const NewProject = ({ className }: NewProjectProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div
                className={styles.contentHeader}
                style={{
                    textAlign: 'center',
                }}
            >
                New Clinical Project
            </div>
            <form className={styles.projectForm}>
                <label className={styles.formField}>
                    <div style={{
                        marginRight:150,
                    }}>Study Name:</div>
                    <input type="text" />
                </label>
                <br />
                <label className={styles.formField}>
                    Description
                    <input type="text" />
                </label>
                <br />
                <label className={styles.formField}>
                    Start Date
                    <input
                        type="date"
                        style={{
                            width: 180,
                            paddingRight: '10px',
                            paddingLeft: '10px',
                        }}
                    />
                </label>
                <br />
                <label className={styles.formField}>
                    End Date
                    <input
                        type="date"
                        style={{
                            width: 180,
                            padding: '0px 10px',
                        }}
                    />
                </label>
                <br />
                <label className={styles.formField}>
                    Duration
                    <input type="text" />
                </label>
                <br />
                <label className={styles.formField}>
                    Treatment
                    <input type="text" />
                </label>
                <br />
                <label className={styles.formField}>
                    Sponsor
                    <input type="text" />
                </label>
                <br />
                <br />
                <div
                    style={{
                        alignContent: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        marginBottom:20,
                    }}
                >
                    <input
                        type="submit"
                        value="Create Study"
                        style={{ color: '#FFFFFF', backgroundColor: 'rgb(3, 67, 125)' }}
                    />
                </div>
            </form>
        </div>
    );
};
