import * as A from "./Style/TrtStyle"

const Trt = () => {
    return(
        <A.All>
            <A.Title>대여현황</A.Title>{/*제목*/}
            <A.Line/>{/*구분 선*/}
                <A.Box>
                    <A.Ep>컴퓨터</A.Ep>
                    <A.Count>3개</A.Count>
                    <A.Count>2024/12/12 ~ 2024/12/12</A.Count>
                    <A.Reason>사유 : 민채가 아닌 서현동이 천재여서...</A.Reason>
                    <A.Access>기한초과</A.Access>
                </A.Box>
        </A.All>
    );
}
export default Trt;


