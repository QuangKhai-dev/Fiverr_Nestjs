export declare class CertificateDto {
    name: string;
    description: string;
    link: string;
}
declare const UpdateCertificateDto_base: import("@nestjs/common").Type<Partial<CertificateDto>>;
export declare class UpdateCertificateDto extends UpdateCertificateDto_base {
}
export {};
