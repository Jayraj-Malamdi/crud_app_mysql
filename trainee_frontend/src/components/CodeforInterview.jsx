import { textAlign } from "@mui/system";

const CodeforInterview = () => {
    return (
        <>
            <p style={{ textAlign: 'center', paddingTop: '100px', fontSize: '35px', fontFamily: 'sans-serif', fontWeight: 'bold', marginBottom: '70px'}}>BOOKS MANAGEMENT</p>

            <h2 style={{textAlign: 'center', fontSize: '25px', fontFamily: 'sans-serif', fontWeight: 'bold', marginBottom: '70px'}}>This is a CRUD application, which uses MySQL, ExpressJS, NodeJS, ReactJS</h2>

            <p style={{textAlign: 'center'}}>
              This is the books management page. Here you can perform various actions related to book management such as adding new books, editing existing books, and viewing all books.
            </p>
        </>
    );
}

export default CodeforInterview;
