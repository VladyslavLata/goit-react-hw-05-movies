import { Box } from 'components/Box/Box';
import { Rating } from 'components/Rating/Rating';
import * as SC from './MovieDetailsBox.styled';

export const MovieDetailsBox = ({
  movie: { title, overview, genres, poster_path, vote_average, release_date },
}) => {
  return (
    <Box as="div" display="flex">
      <SC.ImgWrap>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
        />
      </SC.ImgWrap>
      <Box as="div" ml={5}>
        <Box as="h3" display="inline-block" mr={6}>
          {title}
        </Box>
        <Rating rating={vote_average} />
        <SC.Table>
          <tbody>
            <tr>
              <SC.TableCell>Release date:</SC.TableCell>
              <SC.TableCell> {release_date}</SC.TableCell>
            </tr>
            <tr>
              <SC.TableCell>Overview:</SC.TableCell>
              <SC.TableCell>{overview}</SC.TableCell>
            </tr>
            <tr>
              <SC.TableCell>Genres:</SC.TableCell>
              <SC.TableCell>
                {genres.map(({ name }) => name).join(', ')}
              </SC.TableCell>
            </tr>
          </tbody>
        </SC.Table>
      </Box>
    </Box>
  );
};
