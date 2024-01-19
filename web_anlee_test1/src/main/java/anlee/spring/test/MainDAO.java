package anlee.spring.test;

import java.util.List;
import java.util.Map;

import javax.inject.Inject;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;

@Repository("mainDAO")
public class MainDAO {
	
	@Inject
	private SqlSession sqlSession;
	
	// 단건 조회
	public Map<String, Object> selectOne(String queryId, Map<String, Object> selectMap) {
		
		return sqlSession.selectOne(queryId, selectMap);
	}
	
	// 리스트 조회
	public List<Object> selectList(String queryId, Map<String, Object> selectMap) {
		
		return sqlSession.selectList(queryId, selectMap);
	}
	
	// 등록
	public void insert(String queryId, Map<String, Object> insertMap) {
		
		sqlSession.insert(queryId, insertMap);
	}
	
	// 수정
	public void update(String queryId, Map<String, Object> updateMap) {
		
		sqlSession.update(queryId, updateMap);
	}
	
	// 삭제
	public void delete(String queryId, Map<String, Object> deleteMap) {
		
		sqlSession.delete(queryId, deleteMap);
	}
}
