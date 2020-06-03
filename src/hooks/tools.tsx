import React, {
  useState,
  useEffect,
  useContext,
  useMemo,
  createContext,
  useCallback,
} from 'react';
import api from '../services/api';

interface AddToolFormData {
  title: string;
  description: string;
  link: string;
  tags: string;
}

interface Tool {
  id: string;
  title: string;
  description: string;
  link: string;
  tags: string[];
}

interface RemoveToolFormData {
  search: string;
}

interface ToolsContextData {
  tools: Tool[];
  loadTools(): void;
  removeTool(id: string): void;
  handleAddToolSubmit(data: AddToolFormData): Promise<void>;
  handleSearchSubmit(data: RemoveToolFormData): Promise<void>;
}

const ToolsContext = createContext<ToolsContextData>({} as ToolsContextData);

const ToolsProvider: React.FC = ({ children }) => {
  const [tools, setTools] = useState<Tool[]>([]);

  const loadTools = useCallback(async () => {
    const response = await api.get('/tools');

    setTools(response.data);
  }, []);

  const removeTool = useCallback(
    async (id) => {
      await api.delete(`/tools/${id}`);

      const toolIndex = tools.findIndex((tool) => tool.id === id);

      const toolsNew = tools;
      toolsNew.splice(toolIndex, 1);

      setTools([...toolsNew]);
    },
    [tools],
  );

  const handleAddToolSubmit = useCallback(
    async (data: AddToolFormData) => {
      const tagsSplit = data.tags.split(' ');

      const request = { ...data, tags: tagsSplit };

      const response = await api.post('/tools', request);

      const tool = response.data;

      tools.push(tool);
    },
    [tools],
  );

  const handleSearchSubmit = useCallback(async (data: RemoveToolFormData) => {
    const { search } = data;

    const response = await api.get(`/tools?tag=${search}`);

    const toolsNew = response.data as Tool[];

    setTools([...toolsNew]);
  }, []);

  const value = React.useMemo(
    () => ({
      tools,
      loadTools,
      removeTool,
      handleAddToolSubmit,
      handleSearchSubmit,
    }),
    [tools, loadTools, removeTool, handleAddToolSubmit, handleSearchSubmit],
  );

  return (
    <ToolsContext.Provider value={value}>{children}</ToolsContext.Provider>
  );
};

function useTools(): ToolsContextData {
  const context = useContext(ToolsContext);

  if (!context) {
    throw new Error('useTool must be within a ToolProvider.');
  }

  return context;
}

export { ToolsProvider, useTools };
