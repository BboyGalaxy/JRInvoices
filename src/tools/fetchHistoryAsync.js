import dayjs from "dayjs";
import { supabase } from "./client";
import { setHistoryData, setFrom, setTo } from "./HistoryReducer";

export const fetchHistoryAsync = async (dispatch,
  from = dayjs().format('YYYY-MM-DD'),
  to = dayjs().format('YYYY-MM-DD')
) => {

  try {
    const { data, error } = await supabase
      .from('invoice')
      .select()
      .gte('invoiceDate', from)
      .lte('invoiceDate', to);

    if (!error) {
      dispatch(setHistoryData(data));
      dispatch(setFrom(from));
      dispatch(setTo(to));
    } else {
      throw error;
    }
  } catch (error) {
    console.error("Error fetching history:", error);
    throw error;
  }
};
