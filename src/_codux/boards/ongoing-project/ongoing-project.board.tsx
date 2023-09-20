import { createBoard } from '@wixc3/react-board';
import { OngoingProject } from '../../../components/ongoing-project/ongoing-project';

export default createBoard({
    name: 'OngoingProject',
    Board: () => <OngoingProject />,
    isSnippet: true,
});
