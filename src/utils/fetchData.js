export default async function GetData(URL) {
    try {
        const res = await fetch(URL)
        const data = await data.json()
        return data
    } catch (error) {
        console.log(error);
        
    }
}