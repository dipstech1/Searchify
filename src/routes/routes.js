
import { Route, Routes, useRoutes } from 'react-router-dom';
import SearchResult from '../components/SearchResult';
import Search from '../components/Search';

// export const RouteData = () => {
//     <Routes>
//         <Route path='' element={<Search />}></Route>
//         <Route path='/result/:searchStr' element={<SearchResult />} ></Route>
//     </Routes>
// }

export default function SearchifyRouter() {
    const Routes = useRoutes([
        {
            path: "",
            element: <Search />,
        },
        {
            path:"/result/:searchStr",
            element:<SearchResult />
        }
    ])

    
    return Routes;
}