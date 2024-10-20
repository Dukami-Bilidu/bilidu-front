import * as A from "./Style/ApplyStyle"

const Apply = () => {
    return(
        <A.All>
            <A.Title>신청현황</A.Title>{/*제목*/}
            <A.Line/>{/*구분 선*/}
                <A.Box>
                    <A.Ep>컴퓨터</A.Ep>{/*기자제 이름*/}
                    <A.Count>3개</A.Count>{/*개수*/}
                    <A.Count>2024/12/12 ~ 2024/12/12</A.Count>{/*반납일자*/}
                    <A.Reason>사유 : 민채가 아닌 서현동이 천재여서...</A.Reason>{/*빌리는 사유*/}
                    <A.Access>신청 승인중</A.Access>{/*확인 상태*/}
                </A.Box>
        </A.All>
    );
}
export default Apply;


