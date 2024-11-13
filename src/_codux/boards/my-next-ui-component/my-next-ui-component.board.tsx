import { createBoard } from '@wixc3/react-board';
import MyNextUIComponent from '../../../components/my-next-ui-component/my-next-ui-component';
import { NextUIProvider } from '@nextui-org/system';

export default createBoard({
    name: 'MyNextUIComponent',
    Board: () => (
        <NextUIProvider>
            <div className="dark text-foreground bg-background">
                <MyNextUIComponent />
            </div>
        </NextUIProvider>
    ),
    environmentProps: {
        windowWidth: 1920,
        windowHeight: 1080,
    },
});
