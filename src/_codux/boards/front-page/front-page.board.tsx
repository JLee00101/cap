import { createBoard } from '@wixc3/react-board';
import { FrontPage } from '../../../components/front-page/front-page';
import { Header } from '../../../components/header/header';
import { Navbar } from '../../../components/navbar/navbar';
import { OngoingProject } from '../../../components/ongoing-project/ongoing-project';
import { UpcomingProject } from '../../../components/upcoming-project/upcoming-project';
import { Sidebar } from '../../../components/sidebar/sidebar';

export default createBoard({
    name: 'FrontPage',
    Board: () => (
        <div>
            <Header />
            <Navbar />
            <div className="splitPanel">
                <div>
                    <OngoingProject />
                    <UpcomingProject />
                </div>
                <div>
                    <Sidebar />
                </div>
            </div>
        </div>
    ),
    isSnippet: true,
    environmentProps: {
        canvasWidth: 1086,
        windowWidth: 1018,
    },
});
