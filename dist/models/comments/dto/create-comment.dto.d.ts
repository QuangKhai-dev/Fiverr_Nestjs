export declare class CreateCommentDto {
    content: string;
    jobId: number;
}
declare const UpdateCommentDto_base: import("@nestjs/common").Type<Pick<CreateCommentDto, "content">>;
export declare class UpdateCommentDto extends UpdateCommentDto_base {
}
export {};
