const announcementsController = ({ createAnnouncementUseCase, listAnnouncementsUseCase }) => {
    return {
        createAnnouncement: async (req, res, next) => {
            try {
                const announcementData = req.body;
                const announcement = await createAnnouncementUseCase(announcementData);
                res.status(201).json(announcement);
            } catch (error) {
                next(error);
            }
        },
        listAnnouncements: async (req, res, next) => {
            try {
                const announcements = await listAnnouncementsUseCase();
                res.status(200).json(announcements);
            } catch (error) {
                next(error);
            }
        },
    };
};

export default announcementsController;
