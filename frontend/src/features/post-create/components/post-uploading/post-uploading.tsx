import * as S from './post-uploading.styled';

export const PostUploading = () => {
  return (
    <S.Wrapper>
      <S.Title>
        <S.UploadImage path="/general/upload.svg" />
        <S.UploadDescription>Choose a file.</S.UploadDescription>
      </S.Title>
      <S.Info>
        We recommend using high quality .jpg files less than 20 files less than
        200 MB.
      </S.Info>
    </S.Wrapper>
  );
};
