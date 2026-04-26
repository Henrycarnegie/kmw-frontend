import { getCourses } from '@/src/lib/api/courses';
import CourseHero from './_components/CourseHero';
import CourseCatalog from './_components/CourseCatalog';

export const metadata = {
    title: 'Courses | Know My World',
    description: 'Explore our wide range of courses and start your learning journey today.',
};

const CoursesPage = async () => {
    const { data: courses } = await getCourses();

    return (
        <div className="min-h-screen bg-[#FDFDFF]">
            <CourseHero />
            <CourseCatalog initialCourses={courses} />
        </div>
    );
};

export default CoursesPage;