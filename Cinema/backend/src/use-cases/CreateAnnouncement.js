const createAnnouncement = ({ announcementRepository }) => {
    return async (announcementData) => {
        const newAnnouncement = await announcementRepository.add(announcementData);
        return newAnnouncement;
    };
};

export default createAnnouncement;
