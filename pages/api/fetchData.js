export default async function handler(req, res) {
    const url = 'https://jsonplaceholder.typicode.com/posts'; // 使用免费的 JSONPlaceholder API
    try {
        const response = await fetch(url);
        const data = await response.json();
        res.status(200).json(data); // 返回数据
    } catch (error) {
        res.status(500).json({ message: 'Error fetching data' });
    }
}
