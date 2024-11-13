import {
    Button,
    Card,
    CardHeader,
    Image,
    CardBody,
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
    Input,
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
    Avatar,
    Chip,
    Progress,
    Accordion,
    AccordionItem,
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    useDisclosure,
NextUIProvider,
AvatarIcon,
} from '@nextui-org/react';
import { useState } from 'react';
import '../../tailwind.css';

const MyNextUIComponent = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Example data
    const recentActivities = [
        { title: 'Project Alpha', status: 'Completed', date: '2024-01-15' },
        { title: 'Task Beta', status: 'In Progress', date: '2024-01-16' },
        { title: 'Review Delta', status: 'Pending', date: '2024-01-17' },
    ];

    return (
   <NextUIProvider>
                <div className="min-h-screen bg-background">
                    {/* Navigation Bar */}
                    <Navbar 
                        isBordered 
                        isMenuOpen={isMenuOpen} 
                        onMenuOpenChange={setIsMenuOpen}
                        className="bg-background/60 backdrop-blur-md"
                    >
                        <NavbarBrand>
                            <p className="font-bold text-inherit">ACME</p>
                        </NavbarBrand>
                        <NavbarContent className="hidden sm:flex gap-4" justify="center">
                            <NavbarItem>
                                <Link color="foreground" href="#">
                                    Dashboard
                                </Link>
                            </NavbarItem>
                            <NavbarItem>
                                <Link color="foreground" href="#">
                                    Projects
                                </Link>
                            </NavbarItem>
                            <NavbarItem>
                                <Link color="foreground" href="#">
                                    Team
                                </Link>
                            </NavbarItem>
                        </NavbarContent>
                        <NavbarContent justify="end">
                            <NavbarItem>
                                <Button isIconOnly variant="light" aria-label="Search"></Button>
                            </NavbarItem>
                            <NavbarItem>
                            </NavbarItem>
                        </NavbarContent>
                    </Navbar>
            {/* Main Content */}
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Main Dashboard Card */}
                    <Card className="col-span-2">
                        <CardHeader className="flex justify-between">
                            <div>
                                <h4 className="text-xl font-bold">Dashboard Overview</h4>
                                <p className="text-small text-default-500">Welcome back, User!</p>
                            </div>
                            <Button color="primary" onPress={onOpen}>
                                New Project
                            </Button>
                        </CardHeader>
                        <CardBody>
                            <div className="space-y-6">
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <span>Overall Progress</span>
                                        <span>75%</span>
                                    </div>
                                    <Progress value={75} color="success" className="mb-4" />
                                </div>

                                <div className="flex gap-4">
                                    <Card className="flex-1 p-4">
                                        <h5 className="text-small font-medium">Active Projects</h5>
                                        <p className="text-large font-bold">12</p>
                                    </Card>
                                    <Card className="flex-1 p-4">
                                        <h5 className="text-small font-medium">Completed</h5>
                                        <p className="text-large font-bold">24</p>
                                    </Card>
                                    <Card className="flex-1 p-4">
                                        <h5 className="text-small font-medium">In Review</h5>
                                        <p className="text-large font-bold">8</p>
                                    </Card>
                                </div>
                            </div>
                        </CardBody>
                    </Card>

                    {/* Side Panel */}
                    <Card>
                        <CardHeader>
                            <h4 className="text-xl font-bold">Recent Activity</h4>
                        </CardHeader>
                        <CardBody>
                            <Accordion>
                                {recentActivities.map((activity, index) => (
                                    <AccordionItem
                                        key={index}
                                        title={activity.title}
                                        subtitle={activity.date}
                                    >
                                        <div className="py-2">
                                            <Chip
                                                color={
                                                    activity.status === 'Completed'
                                                        ? 'success'
                                                        : activity.status === 'In Progress'
                                                        ? 'warning'
                                                        : 'default'
                                                }
                                            >
                                                {activity.status}
                                            </Chip>
                                        </div>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </CardBody>
                    </Card>
                </div>

                {/* Featured Content */}
                <Card className="mt-6">
                    <CardHeader>
                        <h4 className="text-xl font-bold">Featured Projects</h4>
                    </CardHeader>
                    <CardBody>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-fr">
                            {[1, 2, 3].map((item) => (
                                <Card key={item} className="py-4 h-full flex flex-col">
                                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                                        <p className="text-tiny uppercase font-bold">Project {item}</p>
                                        <small className="text-default-500">Last updated 3d ago</small>
                                        <h4 className="font-bold text-large">Frontend Radio</h4>
                                    </CardHeader>
                                    <CardBody className="overflow-visible py-2 flex-grow">
                                        <div className="relative w-full h-0 pb-[56.25%]">
                                            <Image
                                                alt="Card background"
                                                className="absolute inset-0 object-cover rounded-xl"
                                                src="https://nextui.org/images/hero-card-complete.jpeg"
                                                width={270}
                                                height={192}
                                                style={{
                                                    aspectRatio: "16/9",
                                                    objectFit: "cover"
                                                }}
                                                loading="lazy"
                                                decoding="async"
                                                fallbackSrc="https://via.placeholder.com/270x192"
                                            />
                                        </div>
                                    </CardBody>
                                </Card>
                            ))}
                        </div>
                    </CardBody>
                </Card>
            </div>

            {/* Modal */}
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalContent>
                    <ModalHeader>Create New Project</ModalHeader>
                    <ModalBody>
                        <Input
                            label="Project Name"
                            placeholder="Enter project name"
                            variant="bordered"
                        />
                        <Input
                            label="Description"
                            placeholder="Enter project description"
                            variant="bordered"
                        />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" variant="light" onPress={onClose}>
                            Cancel
                        </Button>
                        <Button color="primary" onPress={onClose}>
                            Create
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
                </NextUIProvider>
    );
};

export default MyNextUIComponent;
