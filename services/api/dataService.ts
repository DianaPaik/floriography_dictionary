import supabase from '../db/supabaseClient';

// 🔥 CREATE - 새로운 할 일 추가
export const addTodo = async (userId: string, task: string) => {
  const {data, error} = await supabase
    .from('todos')
    .insert([{user_id: userId, task, is_complete: false}]);

  if (error) throw error;
  return data;
};

// 🔍 READ - 할 일 목록 조회
export const fetchTodos = async (userId: string) => {
  const {data, error} = await supabase
    .from('todos')
    .select('*')
    .eq('user_id', userId)
    .order('inserted_at', {ascending: false}); // 최신순 정렬

  if (error) throw error;
  return data;
};

// 🔎 READ (조건 검색) - 특정 할 일 검색
export const searchTodos = async (userId: string, query: string) => {
  const {data, error} = await supabase
    .from('todos')
    .select('*')
    .eq('user_id', userId)
    .ilike('task', `%${query}%`);

  if (error) throw error;
  return data;
};

// 🔄 UPDATE - 할 일 수정 (할 일 내용 및 완료 상태 변경)
export const updateTodo = async (
  id: number,
  task: string,
  isComplete: boolean,
) => {
  const {data, error} = await supabase
    .from('todos')
    .update({task, is_complete: isComplete})
    .eq('id', id);

  if (error) throw error;
  return data;
};

// 🗑️ DELETE - 할 일 삭제
export const deleteTodo = async (id: number) => {
  const {data, error} = await supabase.from('todos').delete().eq('id', id);

  if (error) throw error;
  return data;
};

// ✅ TOGGLE - 완료 상태 토글
export const toggleTodo = async (id: number, isComplete: boolean) => {
  const {data, error} = await supabase
    .from('todos')
    .update({is_complete: !isComplete})
    .eq('id', id);

  if (error) throw error;
  return data;
};
