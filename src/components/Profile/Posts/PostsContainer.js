import {addAreaTextActionType, addPostActionType,} from "../../../redux/reducer/profile-reducer";
import Posts from "./Posts";
import {connect} from "react-redux";

let mapStateToProps = state => ({
        areaTextValue: state.profilePage.textAreaText,
        posts: state.profilePage.userPosts
    })

let mapDispatchToProps = dispatch => ({
        addText: (text) => {
            dispatch(addPostActionType(text))
        },
        addAreaText: (text) => {
            dispatch(addAreaTextActionType(text))
        }
    });

export default connect(mapStateToProps, mapDispatchToProps)(Posts);