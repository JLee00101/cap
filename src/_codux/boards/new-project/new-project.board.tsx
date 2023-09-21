import { createBoard } from '@wixc3/react-board';
import { NewProject } from '../../../components/new-project/new-project';

export default createBoard({
    name: 'NewProject',
    Board: () => <NewProject />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 438,
    },
});
