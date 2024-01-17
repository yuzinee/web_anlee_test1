package anlee.spring.test;

import java.util.Map;

import javax.inject.Inject;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;

@Repository("mainDAO")
public class MainDAO {
	
	@Inject
	private SqlSession sqlSession;

	public Map<String, Object> select(String queryId, Map<String, Object> selectMap) {
		// Use selectOne instead of selectList
		return sqlSession.selectOne(queryId, selectMap);
	}
}
