export default function handler(req, res) {
    if (req.method === 'GET') {
        res.status(200).json({ message: 'Bonjour depuis le back-end !' });
    } else {
        res.status(405).json({ message: 'Méthode non autorisée' });
    }
}
