import './Portfolio.css';
import { useState } from "react"
import { Toolbar } from "../toolbar/Toolbar"
import { ProjectList } from "../projectList/ProjectList"

export const Portfolio = ({showImg}) => {
      
    const [selectedFilter, setSelectedFilter] = useState('All');
    const [showUrlImg, setShowUrlImg] = useState(showImg);

    const handleSelectFilter = (filter) => {
        const buttons = document.querySelectorAll('button');
        buttons.forEach((project) => project.classList.remove('active'));

        filter.target.classList.add('active');

        const select = filter.target.textContent;

        if (select === 'All') {
            setShowUrlImg(showImg);
        } else {
            setShowUrlImg(showImg.filter(project  => project.category === select));
        }
        setSelectedFilter(select);
    };


    return (
        <div className='container'>
            <Toolbar
                filters={["All", "Websites", "Flayers", "Business Cards"]}
                selected={selectedFilter}
                onSelectFilter={handleSelectFilter}
            />
            <div className='gallery'>
                <ProjectList projects = {showUrlImg}/>
            </div>
        </div>
    );
}
