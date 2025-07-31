import {URL} from "url";

const pzn = new URL("https://kelas.programmerzamannow.com/l/products?sortKey=name&sortDirection=asc&page=1");

pzn.host = "www.khannedy.com";
pzn.searchParams.append("status", "premium");

console.info(pzn.toString());
console.info(pzn.href);
console.info(pzn.protocol);
console.info(pzn.host);
console.info(pzn.pathname);
console.info(pzn.searchParams);