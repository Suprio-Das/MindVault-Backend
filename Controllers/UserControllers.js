export const createNote = async (req, res) => {
    try {
        const { name, description } = req.body;
        if (!name || !description) {
            return res.status(400).json({ success: false, message: 'All Fields are required' })
        }
    } catch (error) {
        res.json({ success: false, message: error });
    }
}