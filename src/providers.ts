export function osm(x: number, y: number, z: number): string {
  const s = String.fromCharCode(97 + ((x + y + z) % 3))
  return `https://${s}.tile.openstreetmap.org/${z}/${x}/${y}.png`
}

export function stamenToner(x: number, y: number, z: number, dpr: number): string {
  return `https://stamen-tiles.a.ssl.fastly.net/toner/${z}/${x}/${y}${dpr >= 2 ? '@2x' : ''}.png`
}

export function stamenTerrain(x: number, y: number, z: number, dpr: number): string {
  return `https://stamen-tiles.a.ssl.fastly.net/terrain/${z}/${x}/${y}${dpr >= 2 ? '@2x' : ''}.jpg`
}
