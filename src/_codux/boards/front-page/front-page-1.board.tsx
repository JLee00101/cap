import { createBoard } from '@wixc3/react-board';
import { FrontPage } from '../../../components/front-page/front-page';

export default createBoard({
    name: 'FrontPage',
    Board: () => <FrontPage />,
    isSnippet: true,
});
