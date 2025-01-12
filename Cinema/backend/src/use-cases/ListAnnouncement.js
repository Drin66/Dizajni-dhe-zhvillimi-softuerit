const listAnnouncements = ({ announcementRepository }) => {
    return async () => {
        const announcements = await announcementRepository.getAll();
        return announcements;
    };
};

export default listAnnouncements;
