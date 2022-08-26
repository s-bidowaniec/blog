import { useSelector } from 'react-redux';
import { getAllCategories } from '../../../redux/categoriesRedux';
import { Container, Nav, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Categories = () => {
  const categories = useSelector((state) => getAllCategories(state));
  return (
    <Container>
      <h2 className={'me-auto'}>All Categories:</h2>
      <div className="btn-group-vertical">
        {categories.map((cat) => {
          return (
            <Button key={cat.id}>
              <Nav.Link as={NavLink} to={'/category/' + cat.name}>
                {cat.name}
              </Nav.Link>
            </Button>
          );
        })}
      </div>
    </Container>
  );
};

export default Categories;
