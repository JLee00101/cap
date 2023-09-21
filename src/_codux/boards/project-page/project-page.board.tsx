import { createBoard } from '@wixc3/react-board';
import { ProjectPage } from '../../../components/project-page/project-page';

export default createBoard({
    name: 'ProjectPage',
    Board: () => <ProjectPage />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1024,
        canvasWidth: 1040,
    },
});
