import * as S from './post-form.styled';

export const PostForm = () => {
  return (
    <S.Wrapper>
      <S.Item>
        <S.Label htmlFor="title">Title</S.Label>
        <S.Input
          type="text"
          placeholder="Add a title"
          name="title"
          id="title"
        />
      </S.Item>

      <S.Item>
        <S.Label htmlFor="description">Description</S.Label>
        <S.TextArea
          rows={6}
          placeholder="Add a detailed description"
          name="description"
          id="description"
        />
      </S.Item>

      <S.Item>
        <S.Label htmlFor="link">Link</S.Label>
        <S.Input type="text" placeholder="Add a link" name="link" id="link" />
      </S.Item>

      <S.Item>
        <S.Label htmlFor="board">board</S.Label>
        <S.Select name="board" id="board">
          <option>Choose a board</option>
          <option value="1">Board 1</option>
          <option value="2">Board 2</option>
          <option value="3">Board 3</option>
        </S.Select>
      </S.Item>

      <S.Item>
        <S.Label htmlFor="tags">Tagged topics</S.Label>
        <S.Input type="text" placeholder="Add tags" name="tags" id="tags" />
        <S.Small>don't worry, people won't see your tags</S.Small>
      </S.Item>
    </S.Wrapper>
  );
};
