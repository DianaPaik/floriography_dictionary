import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, Alert } from 'react-native';
import { fetchTodos } from '../services/api/dataService';

const TodoList: React.FC = () => {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadTodos = async () => {
            try {
                const data = await fetchTodos('YOUR_USER_ID');  // 🟠 Supabase 유저 ID 필요
                setTodos(data);
            } catch (error) {
                Alert.alert('에러 발생', '데이터를 불러오지 못했습니다.');
            } finally {
                setLoading(false);
            }
        };

        loadTodos();
    }, []);

    if (loading) {
        return <ActivityIndicator size="large" color="#00ff00" />;
    }

    if (!todos.length) {
        return <Text>조회된 데이터가 없습니다.</Text>;
    }

    return (
        <View>
            <FlatList
                data={todos}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={{ padding: 10, borderBottomWidth: 1 }}>
                        <Text>{item.task}</Text>
                        <Text>{item.is_complete ? '완료됨 ✅' : '미완료 ❌'}</Text>
                    </View>
                )}
            />
        </View>
    );
};

export default TodoList;