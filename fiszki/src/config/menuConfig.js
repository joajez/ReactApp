import Home from '../Components/Home/Home'
import About from '../Components/About/About'
import Create from '../Components/Create/Create'
import Learn from '../Components/Learn/Learn'
import Ideas from '../Components/Ideas/Ideas'

const menuComponents = [{ title: 'Home', url: '/', component: Home}, 
    {title: 'About', url: '/about', component: About},
    {title: 'Create', url: '/create', component: Create},
    {title: 'Learn', url: '/learn', component: Learn},
    {title: 'Ideas', url: '/ideas', component: Ideas}]

export default menuComponents

