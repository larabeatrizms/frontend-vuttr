import React, { useState, useContext, createContext, useCallback } from 'react';
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
  loading: boolean;
  loadTools(): void;
  removeTool(id: string): void;
  handleAddToolSubmit(data: AddToolFormData): Promise<void>;
  handleSearchSubmit(data: RemoveToolFormData): Promise<void>;
}

const ToolsContext = createContext<ToolsContextData>({} as ToolsContextData);

const ToolsProvider: React.FC = ({ children }) => {
  const [tools, setTools] = useState<Tool[]>([]);
  const [loading, setLoading] = useState(true);

  const loadTools = useCallback(async () => {
    setLoading(true);
    const response = await api.get('/tools');

    setTools(response.data);
    setLoading(false);
  }, []);

  const removeTool = useCallback(
    async (id) => {
      setLoading(true);
      await api.delete(`/tools/${id}`);

      const toolIndex = tools.findIndex((tool) => tool.id === id);

      const toolsNew = tools;
      toolsNew.splice(toolIndex, 1);

      setTools([...toolsNew]);
      setLoading(false);
    },
    [tools],
  );

  const handleAddToolSubmit = useCallback(
    async (data: AddToolFormData) => {
      setLoading(true);

      const tagsSplit = data.tags.split(' ');

      const request = { ...data, tags: tagsSplit };

      const response = await api.post('/tools', request);

      const tool = response.data;

      tools.push(tool);
      setLoading(false);
    },
    [tools],
  );

  const handleSearchSubmit = useCallback(async (data: RemoveToolFormData) => {
    setLoading(true);
    const { search } = data;

    const response = await api.get(`/tools?tag=${search}`);

    const toolsNew = response.data as Tool[];

    setTools([...toolsNew]);
    setLoading(false);
  }, []);

  const value = React.useMemo(
    () => ({
      tools,
      loading,
      loadTools,
      removeTool,
      handleAddToolSubmit,
      handleSearchSubmit,
    }),
    [
      tools,
      loading,
      loadTools,
      removeTool,
      handleAddToolSubmit,
      handleSearchSubmit,
    ],
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
