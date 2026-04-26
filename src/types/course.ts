export interface Course {
    id: number;
    documentId: number;
    title: string;
    description: string;
    language: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    is_published: boolean;
}

export interface CoursesResponse {
    data: Course[];
    meta: {
        pagination: {
            page: number;
            pageSize: number;
            pageCount: number;
            total: number;
        };
    };
}
