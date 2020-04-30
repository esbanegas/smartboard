import React from 'react';
import { CommandBarControl } from '../Controls';
import TeacherProfile from '../Containers/TeacherProfile';
import AttendanceControl from '../Containers/AttendanceControl';
import GradesPerSection from '../Containers/Masters/GradesPerSections';

const handleTestClik = () => {
    debugger
}

export const routes = [
    {
        name: 'gradesPerSections',
        title: 'Grades Per Sections',
        iconName: 'profile',
        path: '/home/grades-per-section',
        component: GradesPerSection
    },
    {
        name: 'teacherProfile',
        title: 'Teacher Profile',
        iconName: 'profile',
        path: '/home/teacher-profile',
        component: TeacherProfile
    },
    {
        name: 'attendanceControl',
        title: 'Attendance Control',
        iconName: 'Control',
        path: '/home/attendance-control',
        component: AttendanceControl
    },
    {
        name: 'ratings2',
        title: 'Ratings2',
        iconName: 'Financial',
        path: '/home/test2',
        component: () => <div>
            <CommandBarControl items={
                [
                    { text: 'Agregar', iconName: 'Add', onClick: handleTestClik },
                    { text: 'Editar', iconName: 'Edit' },
                    { text: 'Eliminar', iconName: 'Delete' }
                ]
            } />
        </div>
    },
    {
        name: 'rating3',
        title: 'Ratings3',
        iconName: 'Financial',
        path: '/home/test3',
        component: () => <div>test3</div>
    },
    {
        name: 'rating4',
        title: 'Ratings4',
        iconName: 'Financial',
        path: '/home/test4',
        component: () => <div>test4</div>
    },
];