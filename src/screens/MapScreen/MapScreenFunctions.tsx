export const calculatePolygonArea = (vertices: any) => {
    if (vertices.length < 3) {
        return 0;
    }

    let area = 0;
    for (let i = 0; i < vertices.length - 1; i++) {
        const lat1 = vertices[i].latitude;
        const lon1 = vertices[i].longitude;
        const lat2 = vertices[i + 1].latitude;
        const lon2 = vertices[i + 1].longitude;

        const feetPerDegreeLat = 364000;
        const feetPerDegreeLon = 288200;

        const dx = (lon2 - lon1) * feetPerDegreeLon;
        const dy = (lat2 - lat1) * feetPerDegreeLat;

        area += dx * lat1 + dy * lon1;
    }

    const lat1 = vertices[vertices.length - 1].latitude;
    const lon1 = vertices[vertices.length - 1].longitude;
    const lat2 = vertices[0].latitude;
    const lon2 = vertices[0].longitude;

    const feetPerDegreeLat = 364000;
    const feetPerDegreeLon = 288200;

    const dx = (lon2 - lon1) * feetPerDegreeLon;
    const dy = (lat2 - lat1) * feetPerDegreeLat;

    area += dx * lat1 + dy * lon1;
    area = Math.abs(area) / 2;

    return area.toFixed(2);
};